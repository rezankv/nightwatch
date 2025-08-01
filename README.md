# Night Watch - Telegram Message Monitor Bot

<div align="center">
  <img src="logo.png" alt="Night Watch Logo" width="500"/>
  <h3>🦇 Night Watch - Telegram Message Monitoring System</h3>
  <p><em>"I am vengeance, I am the night, I am Batman"</em></p>
</div>

## 📋 Overview

**Night Watch** is a powerful Telegram bot inspired by Batman's vigilant guardian role. It acts as a silent protector that monitors specific Telegram groups and channels for keywords, automatically forwarding relevant messages to designated users. This tool is perfect for staying informed about important discussions, mentions, or events across multiple Telegram communities without having to actively monitor each one.

## 🏗️ Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Telegram API**: `telegram` library
- **Package Manager**: pnpm
- **Containerization**: Docker & Docker Compose
- **Environment Management**: dotenv
- **Logging**: Custom logger with chalk for colored output

## 🎯 Use Cases

Night Watch is particularly useful for:

- **Social Media Monitoring**: Track brand mentions, product discussions, or competitor activity
- **News Aggregation**: Monitor news channels for specific topics or keywords
- **Community Management**: Stay informed about important discussions in multiple groups
- **Security Monitoring**: Watch for security-related discussions or mentions

## 🚀 Features

- ✅ **Multi-Channel Monitoring**: Monitor multiple groups and channels simultaneously
- ✅ **Keyword-Based Filtering**: Forward messages containing specific keywords
- ✅ **Flexible Configuration**: Easy setup through environment variables
- ✅ **Real-time Processing**: Instant message forwarding
- ✅ **Docker Support**: Easy deployment and scaling
- ✅ **Colored Logging**: Clear and informative console output

## 📦 Installation & Setup

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm
- Telegram API credentials
- Docker (for containerized deployment)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nightwatch
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Telegram API Credentials
API_ID=your_api_id
API_HASH=your_api_hash
STRING_SESSION=your_string_session

# Forwarding Configuration
FORWARD_TO=username_or_id_to_forward_messages_to

# Monitoring Targets (comma-separated)
TARGET_IDS=123456789,987654321
TARGET_USERNAMES=channel1,channel2,group1

# Keywords to Monitor (comma-separated)
KEYWORDS=keyword1,keyword2,important,urgent
```   

### 4. Get Telegram API Credentials

1. Visit [my.telegram.org](https://my.telegram.org)
2. Log in with your phone number
3. Go to "API Development Tools"
4. Create a new application
5. Copy the `API_ID` and `API_HASH`

### 5. Generate String Session

Run the bot for the first time to generate a session:

```bash
pnpm run dev
```

Follow the prompts to authenticate with your phone number and 2FA if enabled.

## 🏃‍♂️ Running the Application

### Development Mode

```bash
pnpm run dev
```

### Production Mode

```bash
# Build the project
pnpm run build

# Start the application
pnpm start
```

## 🔧 Configuration Details

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `API_ID` | Telegram API ID | `12345678` |
| `API_HASH` | Telegram API Hash | `abcdef1234567890abcdef1234567890` |
| `STRING_SESSION` | Telegram session string | Generated automatically (you can save it to prevent login every time) |
| `FORWARD_TO` | Username or ID to forward messages to | `username` |
| `TARGET_IDS` | Channel/Group IDs to monitor | `123456789,987654321` |
| `TARGET_USERNAMES` | Channel/Group usernames to monitor | `channel1,group1` |
| `KEYWORDS` | Keywords to trigger forwarding | `important,urgent,breaking` |

### Target Configuration

You can monitor targets using either:
- **IDs**: Numeric identifiers (more reliable)
- **Usernames**: @username format (easier to manage)

### Keyword Matching

- Keywords are matched case-insensitively
- Partial matches are supported
- Multiple keywords can be specified (comma-separated)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 TODO

- [ ] Improve code structure and organization

## ⚠️ Important Notes

- **Privacy**: This bot forwards messages, so ensure you have permission to monitor the target channels
- **Rate Limits**: Be mindful of Telegram's API rate limits
- **Session Security**: Keep your session string secure and private
- **Legal Compliance**: Ensure compliance with local laws and Telegram's Terms of Service

## 📄 License

This project is licensed under the ISC License.

---

<div align="center">
  <p><strong>Night Watch</strong> - Keeping you informed, one message at a time 🦇</p>
  <p><em>Inspired by Batman's vigilant guardian role</em></p>
</div>
