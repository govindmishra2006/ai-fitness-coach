from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import FitnessRecord
from .serializers import FitnessRecordSerializer
from .ml_model import model
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])

def fitness_records(request):

    if request.method == 'GET':

        records = FitnessRecord.objects.all()

        serializer = FitnessRecordSerializer(records, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':

        serializer = FitnessRecordSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def predict_calories(request):

    data = request.data

    features = [[

        data['Gender'],

        data['Age'],

        data['Height'],

        data['Weight'],

        data['Duration'],

        data['Heart_Rate'],

        data['Body_Temp']

    ]]
    prediction = model.predict(features)

    return Response({

        "predicted_calories": prediction[0]

    })
