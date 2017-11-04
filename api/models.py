from django.db import models
from django.contrib.auth.models import User
import inspect
from enum import Enum
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
import uuid
import base64
from datetime import datetime

# Create your models here.

class ChoiceEnum(Enum):

    @classmethod
    def choices(cls):
        # get all members of the class
        members = inspect.getmembers(cls, lambda m: not(inspect.isroutine(m)))
        # filter down to just properties
        props = [m for m in members if not(m[0][:2] == '__')]
        # format into django choice tuple
        choices = tuple([(str(p[1].value), p[0]) for p in props])
        return choices

class PersonType(ChoiceEnum):
    YOUTH = 1
    COACH = 2

class Person(models.Model):
    objects = models.Manager()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    person_type = models.CharField(max_length=1, choices=PersonType.choices(), default='2', null=False)

def generate_token_id():
    myrandom = uuid.uuid4()
    b32 = base64.b32encode(myrandom.bytes)
    return str(b32)[2:6]

class AccountToken(models.Model):
    objects = models.Manager()
    generated_at = models.DateTimeField(default=datetime.now, blank=True)
    token_id = models.CharField(default=generate_token_id, max_length=4)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    phone_number = models.CharField(max_length=64)

@receiver(post_save, sender=User)
def create_user_person(sender, instance, created, **kwargs):
    if created:
        Person.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_person(sender, instance, **kwargs):
    instance.person.save()