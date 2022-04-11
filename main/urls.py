from django.urls import path
from .views import BBLogoutView, ChangeUserInfoView
from .views import index, other_page, profile
from django.contrib.auth.views import LoginView


app_name = 'main'
urlpatterns = [
    path('accounts/login/', LoginView.as_view(template_name='main/login.html'), name='login'),
    path('accounts/profile/change/', ChangeUserInfoView.as_view(), name='profile_change'),
    path('accounts/logout/', BBLogoutView.as_view(), name='logout'),
    path('accounts/profile/', profile, name='profile'),
    path('<str:page>/', other_page, name='other'),
    path('', index, name='index'),
]
