# swagger_client.EstimatesApi

All URIs are relative to *https://api.uber.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**estimates_price_get**](EstimatesApi.md#estimates_price_get) | **GET** /estimates/price | Price Estimates
[**estimates_time_get**](EstimatesApi.md#estimates_time_get) | **GET** /estimates/time | Time Estimates


# **estimates_price_get**
> list[PriceEstimate] estimates_price_get(start_latitude, start_longitude, end_latitude, end_longitude)

Price Estimates

The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EstimatesApi()
start_latitude = 1.2 # float | Latitude component of start location.
start_longitude = 1.2 # float | Longitude component of start location.
end_latitude = 1.2 # float | Latitude component of end location.
end_longitude = 1.2 # float | Longitude component of end location.

try:
    # Price Estimates
    api_response = api_instance.estimates_price_get(start_latitude, start_longitude, end_latitude, end_longitude)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EstimatesApi->estimates_price_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_latitude** | **float**| Latitude component of start location. | 
 **start_longitude** | **float**| Longitude component of start location. | 
 **end_latitude** | **float**| Latitude component of end location. | 
 **end_longitude** | **float**| Longitude component of end location. | 

### Return type

[**list[PriceEstimate]**](PriceEstimate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **estimates_time_get**
> list[Product] estimates_time_get(start_latitude, start_longitude, customer_uuid=customer_uuid, product_id=product_id)

Time Estimates

The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.EstimatesApi()
start_latitude = 1.2 # float | Latitude component of start location.
start_longitude = 1.2 # float | Longitude component of start location.
customer_uuid = 'customer_uuid_example' # str | Unique customer identifier to be used for experience customization. (optional)
product_id = 'product_id_example' # str | Unique identifier representing a specific product for a given latitude & longitude. (optional)

try:
    # Time Estimates
    api_response = api_instance.estimates_time_get(start_latitude, start_longitude, customer_uuid=customer_uuid, product_id=product_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EstimatesApi->estimates_time_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_latitude** | **float**| Latitude component of start location. | 
 **start_longitude** | **float**| Longitude component of start location. | 
 **customer_uuid** | [**str**](.md)| Unique customer identifier to be used for experience customization. | [optional] 
 **product_id** | **str**| Unique identifier representing a specific product for a given latitude &amp; longitude. | [optional] 

### Return type

[**list[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

