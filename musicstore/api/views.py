from django.http import HttpResponse
from django.http import JsonResponse


def index(request):
    return HttpResponse("Hello, world.")

def version_endpoint(request):
    return JsonResponse({
        "version": 10.150,
    })

def list_create_instrument_endpoint(request):
    if request.method == "GET":
        return JsonResponse({"TODO"})
    elif request.method == "POST":
        return JsonResponse({"TODO"})
    else:
        return JsonResponse({
            "console": "Method not allowed.",
        }, status=405)
