import sys
compress_path = "Siege-Rando-Images"
if not compress_path in sys.path:
    sys.path.append(compress_path)

# from compress import Compression, Compressionator

def parse():
#     match Compressionator.mode:
#         case Compression.DECOMPRESS:
#             parse_decompression()
#         case Compression.COMPRESS_NEEDED:
#             parse_needed_compression()
#         case Compression.COMPRESS:
#             parse_compression()
    pass

def parse_decompression():
    print("Parsing decompression")
def parse_needed_compression():
    print("Parsing needed compression")
def parse_compression():
    print("Parsing compression")

def fetch_ending_sq_bracket(string: str, index: int):
    count = 0
    for i in range(index + 1, len(string)):
        char = string[i]
        if char == "[":
            count -= 1
        elif char == "]":
            count += 1
        if count == 1:
            return i;
    return 0
def insert_at_index(insert: str, string: str, at: int) -> str:
    return f"{string[:at]}{insert}{string[at:]}"
def split_at_indices(string: str, indices: list[int]) -> list[str]:
    start = 0
    output = []

    for index in indices:
        if index < 0 or index >= len(string):
            indices.remove(index)

    for index in indices:
        output.append(string[start:index])
        start = index
    output.append(string[index:])

    return output

parse()