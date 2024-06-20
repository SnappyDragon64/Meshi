import {CHALLENGE_REGISTRY} from "@/challenge/registry/Registries.js";

export async function getChallenge(id) {
    return await CHALLENGE_REGISTRY.get(id)
}

export async function getChallenges() {
    return await CHALLENGE_REGISTRY.getAll();
}

export function getChallengeIds() {
    return CHALLENGE_REGISTRY.getIds();
}