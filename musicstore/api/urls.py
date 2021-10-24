from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/version', views.version_endpoint, name='version'),
    path('api/instruments', views.list_create_instruments_endpoint, name='list_create_instruments_endpoint'),
    path('api/instrument', views.retrieve_update_delete_instrument_endpoint, name='retrieve_update_delete_instrument_endpoint')
]
