#pragma strict

private var navigation: NavMeshAgent;
var goal: Transform;

function Start () {

	navigation = GetComponent.<NavMeshAgent>();
	navigation.SetDestination(goal.position);
}
