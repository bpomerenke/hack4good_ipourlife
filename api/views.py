from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from api.models import Person, generate_token_id, AccountToken, Wish, User, Contact
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import json
import logging
from django.core import serializers

def index(request):
    newToken = AccountToken.objects.create(first_name="Bob", last_name="Dude", phone_number="417-355-1079")
    return HttpResponse("Hello, world. You're at the api index. " + generate_token_id() + " person exists")

@csrf_exempt 
def checkToken(request):
    body_unicode = request.body.decode('utf-8')
    data = json.loads(body_unicode)
    token_id = data['token_id']

    exists = AccountToken.objects.filter(token_id=token_id).exists()

    return HttpResponse(status= (200 if exists else 404))

@csrf_exempt
def createToken(request):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)
    
    body_unicode = request.body.decode('utf-8')
    data = json.loads(body_unicode)

    token = AccountToken(first_name=data['first_name'], last_name=data['last_name'], phone_number=data['phone_number'])
    token.save()

    return HttpResponse(json.dumps({'token_id': token.token_id}))

@csrf_exempt
def createYouth(request):
    body_unicode = request.body.decode('utf-8')
    data = json.loads(body_unicode)

    try:
        token = AccountToken.objects.get(token_id=data["token_id"]) # type: AccountToken
        user = token.createUser(data["username"], data["password"], data["email"])
        return HttpResponse(status=201)
    except:
        logging.exception('')
        return HttpResponse(status=400)

@csrf_exempt
def loginUser(request):    
    body_unicode = request.body.decode('utf-8')
    data = json.loads(body_unicode)

    try: 
        user = authenticate(request, username=data["username"], password=data["password"])
        if user is not None:
            login(request, user)
            return HttpResponse(serializers.serialize("json", [user.person,]), status=200)
        else:
            return HttpResponse(status=401)
    except:
        logging.exception('')
        return HttpResponse(status=500)

@csrf_exempt
def logoutUser(request):
    logout(request)
    return HttpResponse(status=200)

@csrf_exempt
def wishes(request, username=None):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)

    if request.method == "GET":
        if username == None:
            username = request.user.username
            
        person = User.objects.get(username=username).person
        wishes = Wish.objects.filter(person=person)
        
        data = serializers.serialize("json", wishes)
        return HttpResponse(data)

    elif request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)
        user = request.user

        person = user.person
        newWish = Wish(person=person, name=data["name"])
        newWish.save()

        data = serializers.serialize("json", [newWish,])
        return HttpResponse(data, status=201)

@csrf_exempt
def contacts(request):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)
    
    person = request.user.person

    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)

        contact = Contact(number=data["number"], name=data["name"])
        contact.save()
        request.user.person.contacts.add(contact)

    if request.method == "PUT":
        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)
        contact = Contact.objects.get(pk=data['pk'])
        contact.number = data["number"]
        contact.name = data["name"]
        contact.save()
            
    data = serializers.serialize("json", Contact.objects.filter(person=person))
    return HttpResponse(data)
