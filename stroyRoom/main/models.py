from django.db import models
from django.contrib.auth.models import AbstractUser
from .utilities import get_timestamp_path


class Category(models.Model):
    title = models.CharField(max_length=200, db_index=True, verbose_name='Название')
    slug = models.SlugField(max_length=200, db_index=True, unique=True)
    super_category = models.ForeignKey('self',
                                       on_delete=models.PROTECT, null=True, blank=True,
                                       verbose_name='Надкатегория')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE, verbose_name='Категория')
    title = models.CharField(max_length=200, db_index=True, verbose_name='Название')
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(blank=True, upload_to=get_timestamp_path, verbose_name='Изоброжение')
    description = models.TextField(blank=True, verbose_name='Описание')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')
    stock = models.PositiveIntegerField(verbose_name='Остаток')
    available = models.BooleanField(default=True, verbose_name='Доступность')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Создан')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Обновлен')

    class Meta:
        ordering = ('title',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.title


class UserProfile(AbstractUser):

    def __str__(self):
        return self.username
