# swagger_client.UserApi

All URIs are relative to *https://api.uber.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**history_get**](UserApi.md#history_get) | **GET** /history | User Activity
[**me_get**](UserApi.md#me_get) | **GET** /me | User Profile


# **history_get**
> Activities history_get(offset=offset, limit=limit)

User Activity

The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()
offset = 56 # int | Offset the list of returned results by this amount. Default is zero. (optional)
limit = 56 # int | Number of items to retrieve. Default is 5, maximum is 100. (optional)

try:
    # User Activity
    api_response = api_instance.history_get(offset=offset, limit=limit)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->history_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| Offset the list of returned results by this amount. Default is zero. | [optional] 
 **limit** | **int**| Number of items to retrieve. Default is 5, maximum is 100. | [optional] 

### Return type

[**Activities**](Activities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **me_get**
> Profile me_get()

User Profile

The User Profile endpoint returns information about the Uber user that has authorized with the application.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()

try:
    # User Profile
    api_response = api_instance.me_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->me_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

