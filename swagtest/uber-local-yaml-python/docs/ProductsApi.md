# swagger_client.ProductsApi

All URIs are relative to *https://api.uber.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_get**](ProductsApi.md#products_get) | **GET** /products | Product Types


# **products_get**
> list[Product] products_get(latitude, longitude)

Product Types

The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apikey
configuration = swagger_client.Configuration()
configuration.api_key['server_token'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['server_token'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.ProductsApi(swagger_client.ApiClient(configuration))
latitude = 1.2 # float | Latitude component of location.
longitude = 1.2 # float | Longitude component of location.

try:
    # Product Types
    api_response = api_instance.products_get(latitude, longitude)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductsApi->products_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **float**| Latitude component of location. | 
 **longitude** | **float**| Longitude component of location. | 

### Return type

[**list[Product]**](Product.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

