from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User

from .serializers import UserSerializer

# APIView to register user
@api_view(['POST'])
def register(request):
    user = UserSerializer(data=request.data)

    if user.is_valid():
        user.save()
        return Response({"user": user.data})

    print("error", user.errors)
    return Response({"error": user.errors})

# APIView to login user
@api_view(['POST'])
def login(request):
    user = User(username=request.data['username'])

    user_info = UserSerializer(data=user)

    print(user_info.initial_data)
    return Response({"user": user_info.initial_data})
