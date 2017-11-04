from django.shortcuts import render
from django.http import HttpResponse
from api.models import Person

def index(request):

    return HttpResponse("Hello, world. You're at the api index. " + str(len(Person.objects.all())) + " person exists")