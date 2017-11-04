from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^checkToken$', views.checkToken, name='checkToken'),
    url(r'^createToken$', views.createToken, name='createToken')
]