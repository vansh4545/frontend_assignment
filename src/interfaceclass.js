class Ticket {
    constructor(id, title, tag, userId, status, priority) {
        this.id = id;
        this.title = title;
        this.tag = tag; 
        this.userId = userId;
        this.status = status;
        this.priority = priority;
    }
}

class User {
    constructor(id, name, available) {
        this.id = id;
        this.name = name;
        this.available = available;
    }
}

class Col {
    constructor(col) {
        this.col = col;
    }
}

class UserIdToData {
    constructor(userData) {
        this.userData = userData; 
    }
}

module.exports = User;
module.exports = Col;
module.exports = UserIdToData;
module.exports = Ticket;
