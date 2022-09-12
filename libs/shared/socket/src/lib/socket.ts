import { Socket } from "socket.io"
import { ClientToServerEvents, ServerToClientEvents } from "./socket-event-map"

export type BackendSocket = Socket<ClientToServerEvents, ServerToClientEvents>

export type FrontendSocket = Socket<ServerToClientEvents, ClientToServerEvents>
