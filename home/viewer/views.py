from django.shortcuts import render
from django.http import HttpResponse,HttpResponseNotFound
from django.conf import settings
import os

# Create your views here.

def home(request,*args, **kwargs):
    return render(request, "index.html")

def viewer(request, *args, **kwargs):
    filePath = os.path.join(settings.TEMPLATES[0]["DIRS"][0],"contents","%s.html"%(kwargs["content"]))
    if os.path.isfile(filePath):
        return render(request, "contents/%s.html"%kwargs["content"])
    else:
        return HttpResponseNotFound("not Found!")