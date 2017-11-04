from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from api.models import Person, generate_token_id, AccountToken, FooObject
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    newToken = AccountToken.objects.create(first_name="Bob", last_name="Dude", phone_number="417-355-1079")
    return HttpResponse("Hello, world. You're at the api index. " + generate_token_id() + " person exists")

@csrf_exempt 
def postCheck(request):
    body_unicode = request.body.decode('utf-8')
    data = json.loads(body_unicode)

    return HttpResponse("body: %s" % data['name'])