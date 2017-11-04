from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^checkToken$', views.checkToken, name='checkToken'),
    url(r'^createToken$', views.createToken, name='createToken'),    
    url(r'^createYouth$', views.createYouth, name='createYouth'),
    url(r'^login$', views.loginUser, name='login'),
    url(r'^logout$', views.logoutUser, name='logout'),
    url(r'^wishes$', views.wishes, name='wishes'),
    url(r'^wishes/(?P<username>\w+)', views.wishes, name='wishes'),
    url(r'^contacts$', views.contacts, name='contacts'),
]