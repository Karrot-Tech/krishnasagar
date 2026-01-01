import json
import os

def fix_ids():
    backup_path = 'src/data/leela_articles.backup.json'
    current_path = 'src/data/leela_articles.json'
    
    if not os.path.exists(backup_path):
        print(f"Error: {backup_path} not found")
        return

    with open(backup_path, 'r', encoding='utf-8') as f:
        backup = json.load(f)
        
    with open(current_path, 'r', encoding='utf-8') as f:
        current = json.load(f)

    # Create mapping of youtube_id -> old_id
    id_mapping = {item['youtube_id']: item['id'] for item in backup if 'youtube_id' in item}
    
    # We want to keep the new IDs if possible for new content, 
    # but the user specifically asked for leela/1 to work.
    
    fixed_articles = []
    used_ids = set()
    
    # First pass: Assign old IDs to matching youtube_ids
    for item in current:
        youtube_id = item.get('youtube_id')
        old_id = id_mapping.get(youtube_id)
        
        if old_id:
            item['id'] = old_id
            used_ids.add(old_id)
            fixed_articles.append(item)
        else:
            # New content like Damu Anna Kasar
            fixed_articles.append(item)

    # Second pass: Assign IDs to items that didn't have an old ID
    # We'll start from 100 for these to avoid collisions with 1-51
    next_id = 100
    for item in fixed_articles:
        if item.get('youtube_id') not in id_mapping:
            while next_id in used_ids:
                next_id += 1
            item['id'] = next_id
            used_ids.add(next_id)
            next_id += 1

    # Sort by ID
    fixed_articles.sort(key=lambda x: x['id'])

    with open(current_path, 'w', encoding='utf-8') as f:
        json.dump(fixed_articles, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully re-indexed {len(fixed_articles)} articles.")

if __name__ == "__main__":
    fix_ids()
