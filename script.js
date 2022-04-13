var speedChanges = document.getElementById("speed").value / 40 + "s";
			document.getElementById("runningOneId").style.animationDuration = speedChanges;
			document.getElementById("runningTwoId").style.animationDuration = speedChanges;
			function changeSpeed() {
				var speedChanges = document.getElementById("speed").value / 40 + "s";
					document.getElementById("runningOneId").style.animationDuration = speedChanges;
					document.getElementById("runningTwoId").style.animationDuration = speedChanges;
			}