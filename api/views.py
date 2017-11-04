from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from api.models import Person, generate_token_id, AccountToken, Wish, User
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
            return HttpResponse(status=200)
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
def getWishes(request, username=None):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)

    if username == None:
        username = request.user.username
        
    person = User.objects.get(username=username).person
    wishes = Wish.objects.filter(person=person)
    
    data = serializers.serialize("json", wishes)
    return HttpResponse(data)