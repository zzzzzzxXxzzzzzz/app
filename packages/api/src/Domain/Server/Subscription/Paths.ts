const SharingPaths = {
  invite: '/v1/subscription-invites',
  acceptInvite: (inviteUuid: string) => `/v1/subscription-invites/${inviteUuid}/accept`,
  declineInvite: (inviteUuid: string) => `/v1/subscription-invites/${inviteUuid}/decline`,
  cancelInvite: (inviteUuid: string) => `/v1/subscription-invites/${inviteUuid}`,
  listInvites: '/v1/subscription-invites',
}

const ApplePaths = {
  confirmAppleIAP: '/v1/subscriptions/apple_iap_confirm',
}

export const Paths = {
  v1: {
    ...SharingPaths,
    ...ApplePaths,
  },
}
