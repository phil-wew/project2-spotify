



# import os
# import csv
# from collections import Counter

# #importing file
# global_csv = os.path.join("data/global_masterfile.csv")
# #reading into file
# with open(global_csv) as csvfile:
#     csvreader = csv.reader(csvfile, delimiter= ",")
#     csv_header = next(csvreader)
# #setting variables
#     songs_list = []
#     singer_list = []
#     stream_count = []
#     # percentage = 0.0
#     # percent = []
#     for row in csvreader: 
#         songs_list.append(row[2])#creating list of candidate names
#         singer_list.append(row[3])
#         stream_count.append(row[4])

#     song_votes = Counter(songs_list) #getting counts of votes for unique candidates
#     singer_names = list(song_votes.keys()) #setting keys from candidate_votes into list
#     song_streams = list(song_votes.values()) #setting values from candidate_votes into list
#     streams = list(streams)
#     popular = max(song_streams)
#     voters = len(song_list)

# #writing out print statements

#     print("Song Results")
#     print(f"Total streams: {popular}")

# #creating text file

# with open("output.txt", "w") as txt_file:
#     txt_file.write("Election Results\n")
#     txt_file.write(f"Total votes: {voters}\n")

# #creating for loop for formatting in text file
#     for i in range (0,len(candvotes)):
#         percentage = (candvotes[i] / float(len(candidates_list)))
#         percent.append(percentage)
#         outputstr = ('{}:'.format(candnames[i]), "{:.2%}".format(percent[i]),'({})'.format(candvotes[i]))
#         outputstr = ' '.join(outputstr)
#         print(outputstr)
#         txt_file.write(outputstr + "\n")
   
#     winner = candvotes.index(popular)
#     print(f"Winner: {candnames[winner]}")
#     txt_file.write(f"Winner: {candnames[winner]}")
