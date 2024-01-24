# Multi-Machine Clipboard

This project provides an easy way to share clipboard content across multiple machines. It's built with Node.js and uses a simple web interface for clipboard management.

## Features

- Copy and paste text across multiple machines
- Simple, easy-to-use web interface
- Built with Node.js for cross-platform compatibility

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- pnpm (Install with `npm install -g pnpm`)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/omarmciver/copycopy.git
    ```
2. Navigate into the project directory:
    ```bash
    cd copycopy
    ```
3. Install the dependencies:
    ```bash
    pnpm install
    ```
4. Build the project:
    ```bash
    pnpm run build
    ```
5. Start the server:
    ```bash
    pnpm serve
    ```

Now, you can access the application at `http://localhost:3000`.

## Usage

In your first browser window, use the Paste button (or simply Ctrl+V) to paste text into the clipboard.

In your second browser window, use the Copy button (or simply Ctrl+C) to copy the text from the clipboard. The input box on the second browser window will only update when you perform the copy operation.

## Docker

You can also run this application in a Docker container. Here's how you can build and run the Docker image:

1. Build the Docker image:
    ```bash
    docker build -t my-app .
    ```
2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 --rm my-app
    ```

Now, you can access the application at `http://localhost:3000`. When you stop the Docker container, it will automatically be removed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.