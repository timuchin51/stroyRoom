from django.urls import path

from .views import index, ShopLoginView, profile, ShopLogoutView

app_name = 'main'

urlpatterns = [
    path('accounts/profile/', profile, name='profile'),
    path('accounts/login/', ShopLoginView.as_view(), name='login'),
    path('accounts/logout/', ShopLogoutView.as_view(), name='logout'),
    path('', index, name='index'),
]