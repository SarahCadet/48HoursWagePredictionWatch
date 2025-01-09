import json
import subprocess
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
