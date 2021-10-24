from django.http import HttpResponse
from django.http import JsonResponse
from .models import Instrument
import json
from django.core.paginator import Paginator


def index(request):
    return HttpResponse("Hello, world.")

def version_endpoint(request):
    return JsonResponse({
        "version": 10.150,
    })

def list_create_instruments_endpoint(request):
    if request.method == "GET":
        instrument = Instrument.objects.all()
        instrument_count = Instrument.objects.count()

    # for example: /api/sellers?limit=5
        limit_numb = request.GET.get("limit", 25)
        paginator = Paginator(instrument, limit_numb)
        page_numb = request.GET.get("page")

        page_obj = paginator.get_page(page_numb)

        results = []
        for instrument in page_obj:
            r = {
                "id": instrument.id,
                "name": instrument.name,
                "price": instrument.price,
                "brand": instrument.brand,
            }
            results.append(r)

        return JsonResponse({
            "count": instrument_count,
            "results": results,
        })

    elif request.method == "POST":
        data = json.loads(request.body)


        name = data.get("name")
        price = data.get("price")
        brand = data.get("brand")


        instrument = Instrument.objects.create(name=name, price=price, brand=brand)


        response = {
            "id": instrument.id,
            "name": instrument.name,
            "price": instrument.price,
            "brand": instrument.brand,
        }
        return JsonResponse(response, status=201)
    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)




def retrieve_update_delete_instrument_endpoint(request,id):
    print("---------------------------------------------------------------------------------------------------")
    try:
        instrument = Instrument.objects.get(id=id)
    except Instrument.DoesNotExist:
        return JsonResponse({"error":"d.n.e."},status=404)


    if request.method == "GET": # Details
        # "Serialization"
        response = {
            "id": instrument.id,
            "name": instrument.name,
            "price": instrument.price,
            "brand": instrument.brand,
        }
        return JsonResponse(response, status=200)

    elif request.method == "PUT": # Update
        data = json.loads(request.body)

        name = data.get("name")
        price = data.get("price")
        brand = data.get("brand")

        instrument.name = name
        instrument.price = price
        instrument.brand = brand
        instrument.save()

        # "Serialization"
        response = {
            "id": instrument.id,
            "name": instrument.name,
            "price": instrument.price,
            "brand": instrument.brand,
        }
        return JsonResponse(response, status=200)

    elif request.method == "DELETE": # Delete
        instrument.delete()
        return JsonResponse({}, status=204)
    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)


    # if request.method == "GET":
    #     return JsonResponse({"TODO"})
    # elif request.method == "POST":
    #     return JsonResponse({"TODO"})
    # else:
    #     return JsonResponse({
    #         "console": "Method not allowed.",
    #     }, status=405)
