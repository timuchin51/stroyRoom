from django.urls import path

from .views import index, ShopLoginView, profile, ShopLogoutView, RegisterDoneView, RegisterUserView

app_name = 'main'

urlpatterns = [
    path('accounts/register/done/', RegisterDoneView.as_view(), name='register_done'),
    path('accounts/register/', RegisterUserView.as_view(), name='register'),
    path('accounts/profile/', profile, name='profile'),
    path('accounts/login/', ShopLoginView.as_view(), name='login'),
    path('accounts/logout/', ShopLogoutView.as_view(), name='logout'),
    path('', index, name='index'),
]