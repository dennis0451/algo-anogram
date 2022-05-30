# Don't forget to run your tests!

from ntpath import join


def is_character_match(string1, string2):
	string_1_list = list(string1.lower())
	string_1_list.sort()
	string_1 = ''.join(string_1_list)

	string_2_list = list(string2.lower())
	string_2_list.sort()
	string_2 = ''.join(string_2_list)

	return(True if string_1 == string_2 else False)
	# Your code here

# print(is_character_match('Dennis','DIENNS'))