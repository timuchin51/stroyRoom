from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'main/index.html')


class ShopLoginView(LoginView):
    template_name = 'main/login.html'


class ShopLogoutView(LoginRequiredMixin, LogoutView):
    template_name = 'main/logout.html'


def profile(request):
    return render(request, 'main/profile.html')
