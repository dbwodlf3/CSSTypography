from django.contrib import admin
from django.urls import path,include,re_path
from django.contrib.staticfiles import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('viewer.urls')),
]

urlpatterns += [
    re_path(r'^static/(?P<path>.*)$', views.serve)
]