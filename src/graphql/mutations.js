/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      isActive
      userImage
      stripeID
      username
      concatName
      numberOfBanners
      deviceToken
      numberOfLogIns
      latestLogin
      language
      member {
        nextToken
        __typename
      }
      creator {
        nextToken
        __typename
      }
      blocker {
        nextToken
        __typename
      }
      blockedUser {
        nextToken
        __typename
      }
      ContactList {
        id
        userForList
        createdAt
        updatedAt
        __typename
      }
      contact {
        id
        contactUserID
        concatName
        contactListID
        createdAt
        updatedAt
        __typename
      }
      banners {
        nextToken
        __typename
      }
      organizer {
        nextToken
        __typename
      }
      rsvp {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      isActive
      userImage
      stripeID
      username
      concatName
      numberOfBanners
      deviceToken
      numberOfLogIns
      latestLogin
      language
      member {
        nextToken
        __typename
      }
      creator {
        nextToken
        __typename
      }
      blocker {
        nextToken
        __typename
      }
      blockedUser {
        nextToken
        __typename
      }
      ContactList {
        id
        userForList
        createdAt
        updatedAt
        __typename
      }
      contact {
        id
        contactUserID
        concatName
        contactListID
        createdAt
        updatedAt
        __typename
      }
      banners {
        nextToken
        __typename
      }
      organizer {
        nextToken
        __typename
      }
      rsvp {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      isActive
      userImage
      stripeID
      username
      concatName
      numberOfBanners
      deviceToken
      numberOfLogIns
      latestLogin
      language
      member {
        nextToken
        __typename
      }
      creator {
        nextToken
        __typename
      }
      blocker {
        nextToken
        __typename
      }
      blockedUser {
        nextToken
        __typename
      }
      ContactList {
        id
        userForList
        createdAt
        updatedAt
        __typename
      }
      contact {
        id
        contactUserID
        concatName
        contactListID
        createdAt
        updatedAt
        __typename
      }
      banners {
        nextToken
        __typename
      }
      organizer {
        nextToken
        __typename
      }
      rsvp {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBanner = /* GraphQL */ `
  mutation CreateBanner(
    $input: CreateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    createBanner(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userID
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner(
    $input: UpdateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    updateBanner(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userID
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner(
    $input: DeleteBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    deleteBanner(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userID
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactList = /* GraphQL */ `
  mutation CreateContactList(
    $input: CreateContactListInput!
    $condition: ModelContactListConditionInput
  ) {
    createContactList(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userForList
      contact {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactList = /* GraphQL */ `
  mutation UpdateContactList(
    $input: UpdateContactListInput!
    $condition: ModelContactListConditionInput
  ) {
    updateContactList(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userForList
      contact {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactList = /* GraphQL */ `
  mutation DeleteContactList(
    $input: DeleteContactListInput!
    $condition: ModelContactListConditionInput
  ) {
    deleteContactList(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userForList
      contact {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      contactUserID
      concatName
      contactList {
        id
        userForList
        createdAt
        updatedAt
        __typename
      }
      contactListID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      contactUserID
      concatName
      contactList {
        id
        userForList
        createdAt
        updatedAt
        __typename
      }
      contactListID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      contactUserID
      concatName
      contactList {
        id
        userForList
        createdAt
        updatedAt
        __typename
      }
      contactListID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      title
      numMembers
      events {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      member {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      memberID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      title
      numMembers
      events {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      member {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      memberID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      title
      numMembers
      events {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      member {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      memberID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlock = /* GraphQL */ `
  mutation CreateBlock(
    $input: CreateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    createBlock(input: $input, condition: $condition) {
      id
      blockerID
      blocker {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      blockedUserID
      blockedUser {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBlock = /* GraphQL */ `
  mutation UpdateBlock(
    $input: UpdateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    updateBlock(input: $input, condition: $condition) {
      id
      blockerID
      blocker {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      blockedUserID
      blockedUser {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBlock = /* GraphQL */ `
  mutation DeleteBlock(
    $input: DeleteBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    deleteBlock(input: $input, condition: $condition) {
      id
      blockerID
      blocker {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      blockedUserID
      blockedUser {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      address
      description
      startDatetime
      endDatetime
      venueName
      eventImage
      organizer {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      organizerID
      group {
        id
        title
        numMembers
        creatorID
        memberID
        createdAt
        updatedAt
        __typename
      }
      groupID
      rsvp {
        nextToken
        __typename
      }
      goingTotal
      paidEvent
      cost
      priceID
      documentLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      address
      description
      startDatetime
      endDatetime
      venueName
      eventImage
      organizer {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      organizerID
      group {
        id
        title
        numMembers
        creatorID
        memberID
        createdAt
        updatedAt
        __typename
      }
      groupID
      rsvp {
        nextToken
        __typename
      }
      goingTotal
      paidEvent
      cost
      priceID
      documentLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      address
      description
      startDatetime
      endDatetime
      venueName
      eventImage
      organizer {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      organizerID
      group {
        id
        title
        numMembers
        creatorID
        memberID
        createdAt
        updatedAt
        __typename
      }
      groupID
      rsvp {
        nextToken
        __typename
      }
      goingTotal
      paidEvent
      cost
      priceID
      documentLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRsvp = /* GraphQL */ `
  mutation CreateRsvp(
    $input: CreateRsvpInput!
    $condition: ModelRsvpConditionInput
  ) {
    createRsvp(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userID
      event {
        id
        title
        address
        description
        startDatetime
        endDatetime
        venueName
        eventImage
        organizerID
        groupID
        goingTotal
        paidEvent
        cost
        priceID
        documentLink
        createdAt
        updatedAt
        __typename
      }
      eventID
      startDatetime
      paid
      paymentLinkID
      signedDocument
      __typename
    }
  }
`;
export const updateRsvp = /* GraphQL */ `
  mutation UpdateRsvp(
    $input: UpdateRsvpInput!
    $condition: ModelRsvpConditionInput
  ) {
    updateRsvp(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userID
      event {
        id
        title
        address
        description
        startDatetime
        endDatetime
        venueName
        eventImage
        organizerID
        groupID
        goingTotal
        paidEvent
        cost
        priceID
        documentLink
        createdAt
        updatedAt
        __typename
      }
      eventID
      startDatetime
      paid
      paymentLinkID
      signedDocument
      __typename
    }
  }
`;
export const deleteRsvp = /* GraphQL */ `
  mutation DeleteRsvp(
    $input: DeleteRsvpInput!
    $condition: ModelRsvpConditionInput
  ) {
    deleteRsvp(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        userImage
        stripeID
        username
        concatName
        numberOfBanners
        deviceToken
        numberOfLogIns
        latestLogin
        language
        createdAt
        updatedAt
        __typename
      }
      userID
      event {
        id
        title
        address
        description
        startDatetime
        endDatetime
        venueName
        eventImage
        organizerID
        groupID
        goingTotal
        paidEvent
        cost
        priceID
        documentLink
        createdAt
        updatedAt
        __typename
      }
      eventID
      startDatetime
      paid
      paymentLinkID
      signedDocument
      __typename
    }
  }
`;
export const createStoreVersion = /* GraphQL */ `
  mutation CreateStoreVersion(
    $input: CreateStoreVersionInput!
    $condition: ModelStoreVersionConditionInput
  ) {
    createStoreVersion(input: $input, condition: $condition) {
      id
      AppleVersion
      GoogleVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStoreVersion = /* GraphQL */ `
  mutation UpdateStoreVersion(
    $input: UpdateStoreVersionInput!
    $condition: ModelStoreVersionConditionInput
  ) {
    updateStoreVersion(input: $input, condition: $condition) {
      id
      AppleVersion
      GoogleVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStoreVersion = /* GraphQL */ `
  mutation DeleteStoreVersion(
    $input: DeleteStoreVersionInput!
    $condition: ModelStoreVersionConditionInput
  ) {
    deleteStoreVersion(input: $input, condition: $condition) {
      id
      AppleVersion
      GoogleVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReports = /* GraphQL */ `
  mutation CreateReports(
    $input: CreateReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    createReports(input: $input, condition: $condition) {
      id
      type
      action
      eventName
      eventLocation
      eventImage
      perpId
      perpFirstName
      perpLastName
      perpUsername
      perpImage
      reporterId
      reporterEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReports = /* GraphQL */ `
  mutation UpdateReports(
    $input: UpdateReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    updateReports(input: $input, condition: $condition) {
      id
      type
      action
      eventName
      eventLocation
      eventImage
      perpId
      perpFirstName
      perpLastName
      perpUsername
      perpImage
      reporterId
      reporterEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReports = /* GraphQL */ `
  mutation DeleteReports(
    $input: DeleteReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    deleteReports(input: $input, condition: $condition) {
      id
      type
      action
      eventName
      eventLocation
      eventImage
      perpId
      perpFirstName
      perpLastName
      perpUsername
      perpImage
      reporterId
      reporterEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
