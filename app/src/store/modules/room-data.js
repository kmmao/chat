/**
 * 作者：hua
 * 时间：2019-03-15
 * 聊天数据临时管理
 */
export default {
    state: {
        msgList: [],//聊天数据
        roomList: [],//单聊房间数据 
        groupRoomList: [] //群聊房间数据

    },
    getters:{
        msgList(state){
            return state.msgList
        },
        roomList(state){
            return state.roomList
        },
        groupRoomList(state){
            return state.groupRoomList
        }
    },

    actions: {
        //提交穿过来的参数 以及突变给mutations
        updateMsgList({commit}, msgList) {
            commit("updateMsgList", msgList);
        },
        updateRoomList({commit}, roomList) {
            commit("updateRoomList", roomList);
        },
        updateGroupRoomList({commit}, groupRoomList) {
            commit("updateGroupRoomList", groupRoomList);
        }
    },

    mutations: {
        //修改仓库值
        updateMsgList(state, msgList){
            state.msgList = msgList
        },
        updateRoomList(state, roomList){
            state.roomList = roomList
        },
        updateGroupRoomList(state, groupRoomList){
            state.groupRoomList = groupRoomList
        }
    }
}