import { PageStrategy } from 'shared/lib/model/PageStrategies';
import Handlebars from 'handlebars';
import template from './ChatPage.hbs';
import { MessageFeed } from 'features/Message';
import { Chat, ChatList } from 'widgets/Chat';
import { ChatHeader } from 'features/Chat';
import { Link } from 'shared/ui/Link/Link';
import './ChatPage.scss';

const mockChats: Chat[] = [
    {
        id: '3',
        title: 'Мама',
        lastMessage: 'Как дела, сынок?',
        time: '12:10',
        unreadCount: 1,
    },
    {
        id: '2',
        title: 'Васек',
        lastMessage: 'Оле оле! Ливерпуль!',
        time: '12:00',
        unreadCount: 0,
    },
    {
        id: '1',
        title: 'Андрюха',
        lastMessage: 'Вы: Как ты, родной?',
        time: '10:45',
        unreadCount: 2,
    },
];

export class ChatPage implements PageStrategy {
    private chatList: ChatList;
    private messageFeed: MessageFeed;
    private chatHeader: ChatHeader;

    constructor() {
        this.chatList = new ChatList({ chats: mockChats });
        this.messageFeed = new MessageFeed();
        this.chatHeader = new ChatHeader({
            textLink: 'профиль',
            link: new Link({ text: 'Профиль  >', href: '/profile' }),
            placeholderSearch: 'поиск',
        });
    }

    render(appElement: HTMLElement): void {
        const html = Handlebars.compile(template)({
            chatList: this.chatList.render(),
            messageFeed: this.messageFeed.render(),
            chatHeader: this.chatHeader.render(),
        });
        appElement.innerHTML = html;
    }

    mount(appElement: HTMLElement): void {
        this.chatList.mount(appElement);
        this.messageFeed.mount(appElement);
    }

    destroy(): void {
        this.chatList.destroy();
        this.messageFeed.destroy();
    }
}
