from django.urls import path
from .views import index, other_page
from django.contrib.auth.views import LoginView


app_name = 'main'
urlpatterns = [
    path('accounts/login/', LoginView.as_view(template_name='main/login.html'), name='login'),
    path('<str:page>/', other_page, name='other'),
    path('', index, name='index'),
]
