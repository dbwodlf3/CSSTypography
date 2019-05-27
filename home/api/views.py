from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from django.conf import settings
import os
# Create your views here.

def contentList(request):
    filePath = os.path.abspath(os.path.join(settings.TEMPLATES[0]["DIRS"][0],"contents"))
    onlyFiles = [f for f in os.listdir(filePath) if os.path.isfile(os.path.join(filePath,f))]
    onlyFilesCreationTime = list(map(os.path.getctime, [os.path.join(filePath,f) for f in onlyFiles]))
    Files = list(zip(onlyFiles, onlyFilesCreationTime))
    Files.sort(key=lambda x: x[1])
    print(Files)
    Response = JsonResponse({"contents": Files})
    return Response