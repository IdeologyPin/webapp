export class Node{
    article: String
    span_type: String
    label: String
    vector: number[]
    scores: Map<String, number>

}

export class Cluster{
    id:string
    name: string
    tags: string[]
    vector: number[]
    nodes: Node[]

}

export class Clustering{
    id: number
    name: string
    method : string
    clusters: Cluster[]
    nodes: Node[]
}

export class ClusteringList{
    clusterings: Clustering[]
}


export class Subject{
    _id:number
    name: string
    children:[number]
}

export class SubjectList{
    count: number
    subjects:Subject[]
}

export class Story{
    // _id: number
    _id: string
    // id: number
    headline: string
    url:string
}

export class StoriesList{
    count: number
    title: string
    stories:Story[]
}

export class Annotation{
    _id: string
    entities: [ string, string,[number[]]][]
    file_name: string
    link: string
    snippet: string
    source: string
    story: number
    text: string
    title: string
}

export class EntityClustering{
    id: number
    name: string
    positive: number[]
    negative: number[]
}

export class entityArticles{
    articles: {}
}