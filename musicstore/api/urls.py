from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/version', views.version_endpoint, name='version'),
    path('api/instrument', views.list_create_instrument_endpoint, name='c_instrument')
]
