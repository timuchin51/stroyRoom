from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render

# Create your views here.
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from django.views.generic.edit import CreateView

from .forms import RegisterUserForm
from .models import UserProfile


def index(request):
    return render(request, 'main/index.html')


class ShopLoginView(LoginView):
    template_name = 'main/login.html'


class ShopLogoutView(LoginRequiredMixin, LogoutView):
    template_name = 'main/logout.html'


class RegisterUserView(CreateView):
    model = UserProfile
    template_name = 'main/register_user.html'
    form_class = RegisterUserForm
    success_url = reverse_lazy('main:register_done')


class RegisterDoneView(TemplateView):
    template_name = 'main/register_done.html'


def profile(request):
    return render(request, 'main/profile.html')
