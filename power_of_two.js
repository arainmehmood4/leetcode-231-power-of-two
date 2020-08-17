/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) 
{   
    while(1)
        {
            if(n==1)
                {
                    return true;
                }
            n=n/2;
            if(!Number.isInteger(n) || n==0 || n==-1)
                {
                    return false;
                }
        }
    return true;
};
