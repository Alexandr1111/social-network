
let subscribers = [] as Array<SubscriberType>;

let ws: WebSocket | null = null;

const closeHandler = () => {
    console.log('close WS');
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages));
}

function createChannel() {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
}

export const chatAPI = {
    start() {
        createChannel();
    },
    stop() {
        subscribers = [];
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close();
    },
    subscribe(callback: SubscriberType) {
        // должны добавить подписчика в массив подписчиков
        subscribers.push(callback);
        return () => {   
            subscribers = subscribers.filter(s => s !== callback);
        }
    },
    unSubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback);
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
}

type SubscriberType = (messages: Array<ChatMessageType>) => void;

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}