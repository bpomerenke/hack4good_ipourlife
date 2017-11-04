from django.contrib import admin
from api.models import Person, AccountToken, Wish
# Register your models here.

admin.site.register(Person)
admin.site.register(AccountToken)
admin.site.register(Wish)
