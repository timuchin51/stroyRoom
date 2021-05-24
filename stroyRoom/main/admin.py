from django.contrib import admin

# Register your models here.
from .models import UserProfile, Category, Product


#
# class UserProfileAdmin(admin.ModelAdmin):
#     list_display = ('__str__', 'date_joined')
#     search_fields = ('username', 'email', 'first_name', 'last_name')
#
#
# admin.site.register(UserProfile, UserProfileAdmin)
#
# admin.site.register(Category)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'super_category')
    list_filter = ('super_category',)
    search_fields = ('slug',)
    prepopulated_fields = {'slug': ('title',)}


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'last_login',
        'username',
        'first_name',
        'last_name',
        'email',
        'is_staff',
        'is_active',
        'date_joined',
    )
    list_filter = (
        'last_login',
        'is_superuser',
        'is_staff',
        'is_active',
        'date_joined',
    )
    raw_id_fields = ('groups', 'user_permissions')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'category',
        'title',
        'slug',
        'image',
        'description',
        'price',
        'stock',
        'available',
        'created_at',
        'updated_at',
    )
    list_editable = ('price', 'stock', 'available',)
    list_filter = ('category', 'available', 'created_at', 'updated_at')
    search_fields = ('slug',)
    date_hierarchy = 'created_at'
    prepopulated_fields = {'slug': ('title',)}
