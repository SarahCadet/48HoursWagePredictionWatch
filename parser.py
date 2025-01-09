import json
import subprocess

'''
process = subprocess.Popen('curl -X POST \
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d @request.json \
     "https://us-central1-aiplatform.googleapis.com/v1/projects/541554200995/locations/us-central1/endpoints/3033629546847928320:predict"', stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, shell=True)
stdout, stderr = process.communicate()

# Print the output
print(stdout)
'''
result = json.loads(stdin)
def max_index(data : list):
    max_v = 0
    max_ind = 0
    for i in range(len(data)):
        if data[i] > max_v:
            max_v = data[i]
            max_ind = i
    return max_ind

for i in range(len(result['predictions'])):
    choice_ind = max_index(list(result['predictions'][i]['scores']))
    choice = ["yes!" if choice_ind == 1 else "no.."]
    print(choice)