from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from api.models import Person, generate_token_id, AccountToken
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
import json
import logging

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
