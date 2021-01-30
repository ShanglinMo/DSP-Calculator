
# importing os module 
import os 
  
# Function to rename multiple files 
def main(): 
    count = 0
    for c, filename in enumerate(os.listdir("./")): 
        src = filename 

        # rules
        dst = filename.replace('Icon_','')
        
        dst = dst.lower()

        os.rename(src, dst) 
        count = c
    print('renamed: {} file(s)'.format(count))
  
# Driver Code 
if __name__ == '__main__': 
      
    # Calling main() function 
    main() 