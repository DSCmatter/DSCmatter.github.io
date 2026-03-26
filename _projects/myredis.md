---
layout: page
title: MyRedis
description: A Redis clone implementation built from scratch in Go
img: assets/img/redis22.png
importance: 1
category: work
github: https://github.com/DSCmatter/MyRedis
---

![alt text](https://media.tenor.com/IQ6Z-aPhr1wAAAAM/date-everywhere-data.gif)

MyRedis is a Redis clone implementation built from scratch to understand the internals of in-memory data stores and network protocols.

### Key Features
- **Redis Protocol Implementation**: Full RESP (Redis Serialization Protocol) parser for command handling
- **In-Memory Key-Value Store**: High-performance storage for strings and hashes
- **Concurrent Connections**: Handle multiple client connections simultaneously using goroutines
- **Data Persistence**: Append-Only File (AOF) for crash recovery and data durability
- **Multiple Commands**: Support for SET, GET, DEL, HSET, HGETALL, and more
- **Easily Extendable**: Simple design for adding new commands and features
- **Redis CLI Compatible**: Works with standard `redis-cli` tool

### Supported Commands
- **String Operations**: `SET`, `GET`, `DEL`
- **Hash Operations**: `HSET`, `HGETALL`, `HDEL`
- **Basic Commands**: `PING`, `ECHO`

### How It Works
1. **Server Initialization**: Starts on port 6379 by default
2. **Connection Handling**: Accepts multiple client connections using goroutines
3. **Protocol Parsing**: RESP parser decodes incoming commands
4. **Command Execution**: Handler processes commands and updates in-memory store
5. **Data Persistence**: AOF logs all write operations for recovery
6. **Response Generation**: Sends RESP-formatted responses back to clients

### Technologies Used
- **Language**: Go (for performance and concurrency)
- **Protocol**: RESP (Redis Serialization Protocol)
- **Concurrency**: Goroutines for handling multiple clients
- **Persistence**: Append-Only File (AOF)
- **Networking**: Go net package
- **Tools**: redis-cli for testing

### Project Structure
- `main.go` - Server initialization and lifecycle
- `resp.go` - RESP protocol parser
- `handler.go` - Command processing logic
- `aof.go` - Data persistence layer

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/MyRedis" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
