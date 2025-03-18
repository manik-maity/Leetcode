class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        left = 0
        bitmask = 0
        max_length = 0
        
        for right in range(len(nums)):
            while (bitmask & nums[right]) != 0:
                bitmask ^= nums[left]  # Remove nums[left] from the bitmask
                left += 1
            
            bitmask |= nums[right]  # Add nums[right] to the bitmask
            max_length = max(max_length, right - left + 1)
        
        return max_length