class LRUCache {
private:
    int cap;
    int count;
    unordered_map<int, list<pair<int, int>>::iterator> m;
    list<pair<int, int>> queue;

public:
    LRUCache(int capacity) {
        cap = capacity;
        count = 0;
    }

    int get(int key) {
        int res = -1;
        auto p = m.find(key);
        if (p != m.end()) {
            res = p->second->second;
            queue.erase(p->second);
            queue.push_front(make_pair(key, res));
            p->second = queue.begin();
        }
        return res;
    }

    void put(int key, int value) {
        auto p = m.find(key);
        if (p != m.end()) {
            queue.erase(p->second);
        }
        else if (count == cap) {
            int delkey = queue.back().first;
            queue.pop_back();
            m.erase(delkey);
        }
        else {
            ++count;
        }
        queue.push_front(make_pair(key, value));
        m[key] = queue.begin();
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */