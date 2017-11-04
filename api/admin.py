from django.contrib import admin
from api.models import Person, AccountToken, Wish, Contact
# Register your models here.

admin.site.register(Person)
admin.site.register(AccountToken)
admin.site.register(Wish)
admin.site.register(Contact)
